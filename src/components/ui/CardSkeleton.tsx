export function CardSkeleton() {
  return (
    <div>
      <div className='flex aspect-7/10 max-h-[500px] min-h-80 min-w-60'>
        <div className='relative aspect-4/5 w-full overflow-hidden rounded-md'></div>
        <div className='flex w-full justify-end'></div>
      </div>
    </div>
  );
}
