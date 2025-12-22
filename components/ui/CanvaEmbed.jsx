"use client";

const CanvaEmbed = () => {
  return (
    <div className="w-full my-6">
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(63,69,81,0.16)]"
        style={{ paddingTop: "57.1429%" }}
      >
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAG7Zwk2o3c/y18w9M3P8tEYXDqmB1s7Wg/view?embed"
          allow="fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <a
        href="https://www.canva.com/design/DAG7Zwk2o3c/y18w9M3P8tEYXDqmB1s7Wg/view?utm_content=DAG7Zwk2o3c&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-2xl text-muted-foreground underline"
      >
        Business Card – Building Contractor
      </a>
    </div>
  );
};

export default CanvaEmbed;
