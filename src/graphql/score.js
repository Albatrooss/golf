import gql from "graphql-tag";

export const myScores = gql`
query {
    myScores {
        errors {
            field
            message
        }
        scores {
            id
            date
            hole1
            hole2
            hole3
            hole4
            hole5
            hole6
            hole7
            hole8
            hole9
            hole10
            hole11
            hole12
            hole13
            hole14
            hole15
            hole16
            hole17
            hole18
            course {
                name
                par1
                hdc1
                par2
                hdc2
                par3
                hdc3
                par4
                hdc4
                par5
                hdc5
                par6
                hdc6
                par7
                hdc7
                par8
                hdc8
                par9
                hdc9
                par10
                hdc10
                par11
                hdc11
                par12
                hdc12
                par13
                hdc13
                par14
                hdc14
                par15
                hdc15
                par16
                hdc16
                par17
                hdc17
                par18
                hdc18
            }
            }
        }
    }
`;

export const score = gql`
query ($scoreId: Float!){
    score (scoreId: $scoreId){
        errors {
            field
            message
        }
        score {
            id
            date
            hole1
            hole2
            hole3
            hole4
            hole5
            hole6
            hole7
            hole8
            hole9
            hole10
            hole11
            hole12
            hole13
            hole14
            hole15
            hole16
            hole17
            hole18
            apr1
            apr2
            apr3
            apr4
            apr5
            apr6
            apr7
            apr8
            apr9
            apr10
            apr11
            apr12
            apr13
            apr14
            apr15
            apr16
            apr17
            apr18
            player {
                id
                username
            }
            course {
                name
                par1
                hdc1
                par2
                hdc2
                par3
                hdc3
                par4
                hdc4
                par5
                hdc5
                par6
                hdc6
                par7
                hdc7
                par8
                hdc8
                par9
                hdc9
                par10
                hdc10
                par11
                hdc11
                par12
                hdc12
                par13
                hdc13
                par14
                hdc14
                par15
                hdc15
                par16
                hdc16
                par17
                hdc17
                par18
                hdc18
            }
            }
        }
    }
`;
