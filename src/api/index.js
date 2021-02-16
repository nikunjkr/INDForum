import axios from "axios";

const url ="https://34dca495-1a17-45c8-a39d-c561d2dd5e04.mock.pstmn.io/team2practo/posts/"

// export const fetchPosts = () => fetch(url).then(res => res.json())
export const fetchPosts = () => axios.get(url)