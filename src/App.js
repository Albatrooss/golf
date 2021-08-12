import { useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { allCourses } from "./graphql/course";
import { myScores, score } from "./graphql/score";
import { loginQuery, meQuery, registerQuery } from "./graphql/user";
import { client } from "./graphql/client";
import ScoreCard from "./components/Scorecard/ScoreCard";
import styled from "styled-components";

function App() {

	const { data } = useQuery(score, {
		variables: { scoreId: 3}
	});
	const scoreTest = data && data.score && data.score.score
	const [login, {fetching: loginFetching, error: loginError, data: loginData}] = useMutation(loginQuery)
	return (
		<Wrapper>
			{ scoreTest && <ScoreCard score={scoreTest} />}
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;