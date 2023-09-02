interface WithPrio {
  data: {
    prio: number;
  };
}

export const byPrio = (a: WithPrio, b: WithPrio) => b.data.prio - a.data.prio;
