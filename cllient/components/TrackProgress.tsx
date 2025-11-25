import React, {JSX} from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress = ({onChange, left, right}: TrackProgressProps) : JSX.Element => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;