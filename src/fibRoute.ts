// Endpoint for querying the fibonacci numbers
import { Request} from 'express';
import fibonacci  from './fib';

export default (req: Request, res) => {
  const { num }  = req.params;

  const fibN = fibonacci(parseInt(num)) as number;
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`
  }

  res.send(result);
}
