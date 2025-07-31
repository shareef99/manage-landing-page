import Button from "./button";

export default function HeroSection() {
  return (
    <section className="relative container">
      <div>
        <img src="/images/illustration-intro.svg" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-c-blue text-center text-4xl font-bold">
          Bring everyone together to build better products.
        </h1>
        <p className="text-c-gray/50 mt-4 text-center text-lg">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className="mt-8 px-8 py-4">Get Started</Button>
      </div>
      <div className="relative">
        <div className="absolute -top-70 -right-60 left-60 z-[-1]">
          <img src="/images/bg-tablet-pattern.svg" alt="Manage Logo" />
        </div>
      </div>
    </section>
  );
}
