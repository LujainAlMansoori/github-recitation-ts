// Endpoint for querying the fibonacci numbers
import { Request} from 'express';
import fibonacci  from './fib';

export default (req: Request, res) => {
  console.log(res)
  const { num }  = req.params;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const fibN: number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  res.send(result);
}
