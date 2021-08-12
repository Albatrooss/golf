import { queryByPlaceholderText } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const Nine = ({ player, data, front=true, eighteen=true }) => {

    const [width, setWidth] = useState(0);
    const wrapperRef = useRef();

    useEffect(() => {
        const totalWidth = wrapperRef.current.offsetWidth;
        setWidth(Math.floor(totalWidth*0.08) - 1);
    }, [wrapperRef])

    let altPar = false;
    let played = !!data[0].score;

    const holes = ['',];
    const pars = ['PAR'];
    let aprs = ['ALT'];
    const hdcs = ['HDC'];
    const scores = [player.username];
    const plusMinus = ['+/-'];
    
    let totalPar = 0;
    let totalApr = 0;
    let totalScore = 0;

    data.forEach(d => {
        if (!altPar && d.apr) altPar = true;
        holes.push(d.hole);
        pars.push(d.par);
        if (d.apr) aprs.push(d.apr);
        hdcs.push(d.hdc);
        scores.push(d.score);
        totalPar += d.par;
        totalApr += d.apr;
        totalScore += d.score;
        let pM = totalScore - (altPar ? totalApr : totalPar);
        plusMinus.push(played ? (pM === 0 ? 'E' : pM > 0 ? `+${pM}` : `${pM}`) : '')
    })

    holes.push(front ? 'IN' : 'OUT');
    pars.push(totalPar);
    aprs.push(totalApr > 0 ? totalApr : '');
    hdcs.push(front ? 'IN' : 'OUT');
    plusMinus.push(plusMinus[plusMinus.length-1]);
    scores.push(played ? totalScore : '');

    if (aprs.length <= 2) aprs = [];

    return (
        <Wrapper eighteen={eighteen} ref={wrapperRef}>
            {holes.map((hole, i) =>
                <Hole key={i}>{hole}</Hole>
            )}
            {pars.map((par, i) =>
                <Par key={i}>{par}</Par>
            )}
            {aprs.map((apr, i) =>
                <Apr key={i}>{apr}</Apr>
            )}
            {hdcs.map((hdc, i) =>
                <Hdc key={i}>{hdc}</Hdc>
            )}
            {scores.map((score, i) =>
                <Score key={i} hole={i > 0 && i < 10} size={width}>{score}</Score>
            )}
            {plusMinus.map((score, i) =>
                <Score key={i} size={width}>{score}</Score>
            )}
        </Wrapper>
    )

}
export default Nine;

const Wrapper = styled.div`
    display: grid;
    width: ${({eighteen}) => eighteen ? '50%' : '100%'};
    grid-template-columns: 1fr repeat(9, 8%) 1fr;
    border: 1px solid white;
`;

const Box = styled.div`
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Hole = styled(Box)`
    color: ${({theme}) => theme.color.white};
`;
const Par = styled(Box)`
    color: ${({theme}) => theme.color.white};
    font-size: 1rem;
    background-color: ${({theme}) => theme.color.darkgreen};
    padding: 0.2rem;
    `;
const Apr = styled(Par)`
    background-color: ${({theme}) => theme.color.fairway};
`;
const Hdc = styled(Box)`
    color: ${({theme}) => theme.color.white};
    font-size: 0.6rem;
    background-color: ${({theme}) => theme.color.darkgreen};
    padding: 0.2rem;
`;

const Score = styled(Box)`
    background-color: ${({theme}) => theme.color.white};
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
`;