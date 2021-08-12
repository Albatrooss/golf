import React from 'react'
import styled from 'styled-components'
import Nine from './Nine';

const ScoreCard = ({ score }) => {
    const { player, course, date} = score;
    const frontNine = [];
    const backNine = [];

    for (let i = 1; i <=18; i++) {
        let holeData = {
            hole: i,
            par: course[`par${i}`],
            hdc: course[`hdc${i}`],
            apr: score[`apr${i}`],
            score: score[`hole${i}`],
        };
        if (i <= 9) {
            frontNine.push(holeData);
            continue;
        }
        backNine.push(holeData);
    }
    // score.
    return (
        <Wrapper>
            <Title>{course.name}</Title>
            <Score>
                {/* <Nine player={player} data={frontNine} /> */}
                <Nine player={player} data={backNine} front={false} eighteen={false} />
            </Score>
        </Wrapper>
    )

}
export default ScoreCard;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 1rem;
    background-color: ${({theme}) => theme.color.black}; 
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h3`
    color: ${({theme}) => theme.color.white};
`;

const Score = styled.div`
    display: flex;
`;