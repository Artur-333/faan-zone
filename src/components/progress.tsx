import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps {
    value: number;
    className?: string;
    containerClassName?: string;
    indicatorClassName?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    value = 0,
    className,
    containerClassName,
    indicatorClassName,
}) => {
    const progressValue = value;
    const progressPercentage = Math.max(0, (progressValue / 10000) * 100);

    return (
        <div>
            <span className='text-[#18E54B] block text-right'>
                +{progressValue}
            </span>
            <div
                className={cn(
                    'relative h-2 w-full overflow-visible rounded-full bg-[#959494]',
                    containerClassName,
                    className
                )}
            >
                <div
                    className={cn(
                        'h-full rounded-full bg-[#18E54B] transition-all duration-300 absolute left-0 top-0 bottom-0 z-10',
                        indicatorClassName
                    )}
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
        </div>
    );
}