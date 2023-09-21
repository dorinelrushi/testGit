import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleClick1() {
    setCount1(count1 + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <button onClick={handleClick1}>Increment Count 1: {count1}</button>
      <button onClick={handleClick2}>Increment Count 2: {count2}</button>
    </div>
  );
}
