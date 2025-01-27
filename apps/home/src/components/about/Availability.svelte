<script lang="ts">
  import { onMount } from 'svelte';
  import classnames from 'classnames';
  import { eachWeekOfInterval, isWithinInterval, startOfWeek } from 'date-fns';

  let container: HTMLElement;
  let list: HTMLOListElement;

  let pills: number;
  let staggerTimeout: boolean;

  const getPills = (el: HTMLElement) => {
    const padding = parseFloat(window.getComputedStyle(el).paddingLeft) * 2;
    const gap = parseInt(window.getComputedStyle(list).gap);

    const width = el.clientWidth - padding + gap;
    const pillWidth = 16 + gap;

    const pills = Math.floor(width / pillWidth);

    return pills;
  };

  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const el = entries.at(0);
      if (el) pills = getPills(el.target as HTMLElement);
    });

    resizeObserver.observe(container);

    setTimeout(() => (staggerTimeout = true), 5_000);

    return () => resizeObserver.disconnect();
  });

  interface Week {
    date: Date;
    booked: boolean;
  }

  const intl = Intl.DateTimeFormat('en-GB', { month: 'short', day: 'numeric', year: 'numeric' });

  const bookedIntervals: Interval[] = [
    { start: new Date('2022-03-14'), end: new Date('2022-07-31') },
    { start: new Date('2022-09-01'), end: new Date('2023-10-05') },
    { start: new Date('2024-01-09'), end: new Date('2024-02-15') },
    { start: new Date('2025-01-01'), end: new Date('2025-12-31') },
  ];

  const weeks: Week[] = eachWeekOfInterval(
    { start: new Date('2022-01-01'), end: new Date('2030-01-01') },
    { weekStartsOn: 1 },
  ).map(date => ({
    date,
    booked: bookedIntervals.some(interval => isWithinInterval(date, interval)),
  }));

  const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const currentWeek = weeks.find(week => week.date.getTime() === startOfCurrentWeek.getTime());
  const weekOfNextStatusChange = weeks
    .slice(weeks.indexOf(currentWeek!))
    .find(
      (week, i, weeksSlice) =>
        week.booked !== weeksSlice[i - 1]?.booked && currentWeek?.booked !== week.booked,
    );

  const getNextWeeks = (amount: number) => {
    const currentWeekIndex = weeks.indexOf(currentWeek!);
    return weeks.slice(currentWeekIndex, currentWeekIndex + amount);
  };

  const isFirstAvailableWeekInInterval = (week: Week, i: number, interval: Week[]) =>
    !week.booked && interval[i - 1]?.booked;
  const isFirstBookedWeekInInterval = (week: Week, i: number, interval: Week[]) =>
    week.booked && !interval[i - 1]?.booked;

  const isFirstWeekInInterval = (week: Week, i: number, interval: Week[]) =>
    isFirstAvailableWeekInInterval(week, i, interval) ||
    isFirstBookedWeekInInterval(week, i, interval);
</script>

<div id="availability" bind:this={container}>
  <!-- Heading -->
  <h2>Availability</h2>

  <!-- Legend -->
  <p>
    <span
      >I am currently <span
        class={classnames([
          currentWeek?.booked ? 'decoration-error' : 'decoration-success',
          'underline',
        ])}
      >
        {currentWeek?.booked ? 'booked' : 'available'}
      </span>.
    </span>
    <br />
    <span>
      But I will be <span
        class={classnames([
          weekOfNextStatusChange?.booked ? 'decoration-error' : 'decoration-success',
          'underline',
        ])}
      >
        {weekOfNextStatusChange?.booked ? 'booked' : 'available'}
      </span>
      from
      <time datetime={weekOfNextStatusChange?.date.toISOString()}>
        {intl.format(weekOfNextStatusChange?.date)}
      </time> again.
    </span>
  </p>

  <!-- Weeks -->
  <div class="not-prose">
    <ol
      bind:this={list}
      class={'tooltip-list flex gap-4 justify-between animate-stagger-[1.5s_+_25ms]'}
    >
      {#each getNextWeeks(pills) as week, weekIndex}
        <li
          data-tip={`${intl.format(week.date)} - ${week.booked ? 'Booked' : 'Available'}`}
          class={classnames([
            week.booked ? 'bg-error' : 'bg-success',
            week.booked ? 'hover:shadow-error' : 'hover:shadow-success',
            week.booked ? 'tooltip-error' : 'tooltip-success',
            weekIndex && isFirstWeekInInterval(week, weekIndex, getNextWeeks(pills))
              ? 'no-tooltip:tooltip-open'
              : '',
            'block tooltip tooltip-bottom box-border h-32 min-w-[1rem] w-4 shadow-even shadow-transparent rounded-box',
            `index-[${weekIndex}] animate-fade-pulse`,
            { '!animate-delay-[calc(25ms_*_var(--index))]': staggerTimeout },
          ])}
        >
          <time datetime={week.date.toISOString()}></time>
        </li>
      {/each}
    </ol>
  </div>
</div>
