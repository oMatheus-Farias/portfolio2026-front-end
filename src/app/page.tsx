import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <p>portfolio app</p>
      <Button
        style={{
          background: 'var(--button-gradient)',
        }}
      >
        Click me
      </Button>
    </div>
  );
}
