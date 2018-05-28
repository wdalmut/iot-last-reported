const time = require('..');

describe("Metadata", () => {
  it("should get the biggest time", () => {
    expect(time({
      r0: {
        timestamp: 1000,
      },
      r1: {
        timestamp: 120124,
      }
    })).toEqual(120124);
  })

  it("should get the biggest in a subset", () => {
    expect(time({
      r0: {
        timestamp: 1000,
      },
      r1: {
        timestamp: 120124,
      },
      sub: {
        r0: {
          timestamp: 120125,
        }
      }
    })).toEqual(120125);
  });

  it("should get the biggest in an early stage", () => {
    expect(time({
      r0: {
        timestamp: 120127,
      },
      r1: {
        timestamp: 120124,
      },
      sub: {
        r0: {
          timestamp: 120125,
        }
      }
    })).toEqual(120127);
  });

  it("should get the biggest on all the same", () => {
    expect(time({
      r0: {
        timestamp: 120127,
      },
      r1: {
        timestamp: 120127,
      },
      sub: {
        r0: {
          timestamp: 120127,
        }
      }
    })).toEqual(120127);
  })

  it("should get the biggest on a complex structure", () => {
    let example = require(__dirname + '/example.json');

    expect(time(example)).toEqual(1520847301);
  })
});
