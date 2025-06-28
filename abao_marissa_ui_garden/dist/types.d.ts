import React from 'react';

interface SmartRatingProps {
    testIdPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
}

declare const SmartRating: React.FC<SmartRatingProps>;

export { SmartRating };
export type { SmartRatingProps };
