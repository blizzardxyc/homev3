'use client';

import React, { createContext, useContext, useState } from 'react';

interface SmoothCursorContextType {
    enabled: boolean;
    toggleCursor: () => void;
}

const SmoothCursorContext = createContext<SmoothCursorContextType | undefined>(undefined);

export const SmoothCursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [enabled, setEnabled] = useState(true); // default: on

    const toggleCursor = () => setEnabled((prev) => !prev);

    return <SmoothCursorContext.Provider value={{ enabled, toggleCursor }}>{children}</SmoothCursorContext.Provider>;
};

export const useSmoothCursor = () => {
    const context = useContext(SmoothCursorContext);
    if (!context) throw new Error('useSmoothCursor must be used inside SmoothCursorProvider');

    return context;
};
