import { Engine, RuleProperties } from 'json-rules-engine';

export const evaluate = async (rules: RuleProperties, facts: any) => {
  const engine = new Engine();
  engine.addRule(rules);
  return engine.run(facts).then(({ events }) => {
    events.map((event) => console.log(event?.params?.message));
    return true;
  });
};

(async () => {
  await evaluate(
    {
      conditions: {
        any: [
          {
            all: [
              {
                fact: 'gameDuration',
                operator: 'equal',
                value: 40,
              },
              {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 5,
              },
            ],
          },
          {
            all: [
              {
                fact: 'gameDuration',
                operator: 'equal',
                value: 48,
              },
              {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 6,
              },
            ],
          },
        ],
      },
      event: {
        // define the event to fire when the conditions evaluate truthy
        type: 'fouledOut',
        params: {
          message: 'Player has fouled out!',
        },
      },
    },
    {
      personalFoulCount: 6,
      gameDuration: 40,
    }
  );
})();
