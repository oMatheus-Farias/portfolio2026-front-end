import { Button } from './ui/Button';

export function DownloadResumeButton() {
  return (
    <Button
      style={{
        background: 'var(--button-gradient)',
      }}
      className="shine-effect hidden w-fit shadow-md transition-all duration-200 hover:cursor-pointer hover:shadow-lg lg:block"
      asChild
    >
      <a href="https://drive.google.com/u/0/uc?id=1UAXtZAoS9PPLrx4gsI6dRIjzJAsOz8Zb&export=download" download>
        📄 Baixar currículo
      </a>
    </Button>
  );
}
