n = 1

search: while (true)
{
  ++n

  for (i = 2 ; i <= Math.sqrt(n) ; ++i)
  {
    if (n % i == 0) continue search
  }

  postMessage(n)
}
