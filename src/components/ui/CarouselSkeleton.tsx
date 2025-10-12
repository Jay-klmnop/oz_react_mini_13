import useEmblaCarousel from "embla-carousel-react";

export function CarouselSkeleton() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  return (
    <div className='relative mx-4'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex gap-4'>
        <div className='centralize relative aspect-video h-full w-full rounded-md p-4 transition-opacity duration-300 ease-in-out'>
        <figure className='aspect-video w-full overflow-hidden rounded-md'>
          <img
            className='absolute inset-0 h-full w-full rounded-md object-cover object-center bg-zinc-300 animate-pulse'
          />
          <div className='absolute inset-0 rounded-md bg-black/30' />
          <div className='absolute bottom-6 left-6 pr-6'>
            <h2 className='text-xl font-bold sm:text-3xl md:text-2xl bg-zinc-300 animate-pulse'></h2>
            <p className='mt-1 line-clamp-1 text-sm opacity-80 sm:line-clamp-2 bg-zinc-300 animate-pulse'></p>
          </div>
        </figure>
      </div>
        </div>
      </div>
    </div>
  );
}
