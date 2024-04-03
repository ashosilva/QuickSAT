export class Question{
  constructor(
    public status: string,
    public answer: number,
    public id: string,
    public figure: string,
    public question: string,
    public choices: [
      { value: string; truth: string; },
      { value: string; truth: string; },
      { value: string; truth: string; },
      { value: string; truth: string; }
    ]
  ) {}
}

