const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('returns a copy of the test rather than creating a new object', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  test('returns an object with its properties trimmed', () => {
    const input = {name: '   jane  ', lastname: '  doe  '}
    const expected = {name: 'jane', lastname: 'doe'}
    const test = utils.trimPropertiesMutation(input);
    expect(test).toEqual(expected)

  })
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test('returns the object returned is the exact same one we passed in', () => {
    const input = {name: '   jane  ', lastname: '  doe  '}
    const expected = {name: 'jane', lastname: 'doe'}
    const test = utils.trimPropertiesMutation(input);
    expect(test).toEqual(expected)
  })
  
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('returns largest number in an array of objects { integer: 2 }', ()=> {
    const input = [1, 3, 5, 6, 10, 21, 40, 2, 4, 5, 9]
    expected = 40;
    const test = utils.Counter(input);
    
    expect(test).toBe(40);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  test('the FIRST CALL of counter.countDown returns the initial count', () => {
    const test = utils.Counter()
    expect(test).toEqual(3)
  })
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  test('the SECOND CALL of counter.countDown returns the initial count minus one', () =>{
    const test = utils.Counter()
    expect(test).toEqual(2)
  })
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test('the count eventually reaches zero but does not go below zero', () => {
    const test = utils.Counter()
    test();
    test();
    expect(test).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  test('the FIRST call of seasons.next returns "summer"', () => {
    const call = utils.Seasons();
    expect(call).toMatch(/summer/)
  })
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  test('the SECOND call of seasons.next returns "fall"', ()=> {
    const call = utils.Seasons();
    call();
    expect(call).toMatch(/fall/)
  })
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  test('the THIRD call of seasons.next returns "winter"', ()=> {
    const call = utils.Seasons();
    call();
    call();
    expect(call).toMatch(/winter/)
  })
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  test('the FOURTH call of seasons.next returns "winter"', ()=> {
    const call = utils.Seasons();
    call();
    call();
    call();
    expect(call).toMatch(/spring/)
  })
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  test('the FOURTH call of seasons.next returns "winter"', ()=> {
    const call = utils.Seasons();
    call();
    call();
    call();
    call();
    expect(call).toMatch(/summer/)
  })
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
  test('the 40th call of seasons.next returns "spring"', () => {
    const call = utils.Seasons();
    for(let i = 0; i <= 39; i++) {
      call();
    }
    expect(call).toMatch(/spring/)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  test('driving the car returns the updated odometer', () => {

    // const toyota = utils.Car('toyota', 10, 30);
    input = 100;
    const actual = utils.drive(input)
  expect(actual).toBe(100)

  })
  // test('[16] driving the car uses gas', () => {})
  test('driving the car uses gas', () => {
    input = 100;
    const actual = utils.drive(input)
    expect(actual).toBeGreaterThan(0);
  })
  // test('[17] refueling allows to keep driving', () => {})
  test('refueling allows to keep driving', () => {
    uitils.Car('focus', 0, 30);
    input = 100;
    const actual = utils.drive(input)
    expect(actual).toBe(0);
    utils.focus.refuel(10);
    expect(actual).not.toBe(0);

  })
  // test('[18] adding fuel to a full tank has no effect', () => {})
  test('adding fuel to a full tank has no effect', ()=>{
    uitils.Car('focus', 0, 30);
    input = 100;
    const actual = utils.drive(input)
    expect(actual).not.toBe(0);
    utils.Car('focus', 10, 30);
    expect(actual).toBe(0);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  test('resolves true if passed an even number', () => {
    const numGiven = 6;
    const actual = utils.isEvenNumberAsync(numGiven)
    expect(actual).toBe(true)
  })
  // test('[20] resolves false if passed an odd number', () => {})
  test('resolves false if passed an odd number', ()=> {
    const numGiven = 5;
    const actual = utils.isEvenNumberAsync(numGiven)
    expect(actual).toBe(false)
  })
})
