import Navbar from '@/components/Navbar';
import Counter from '@/components/Counter';
import ToggleMessage from '@/components/ToggleMessage';


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Welcome to My React App</h1>
      <Counter />
      <ToggleMessage />
    </div>
  );
}
