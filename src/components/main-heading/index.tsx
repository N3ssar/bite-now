function MainHeading({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className="space-y-3">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {subTitle}
      </span>
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default MainHeading;
