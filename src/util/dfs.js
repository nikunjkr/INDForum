

const comment = [];
var graph = [];
for (let i = 0; i < comment.length; i++) {
    if (comment[i].up_level_cid === null) {
        continue;
    }
    graph[comment[i].up_level_cid].push(comment[i].Comment_Id);
    graph[comment[i].Comment_Id].push(comment[i].up_level_cid);

}
function dfs_visit(comment,size, visit, ans){
    visit[comment]=true;

}
function dfs(comment, size) {
    var visit = new Array(comment.length);
    var ans=[];
    for (let i = 0; i < comment.length; i++) {
        if (comment[i].up_level_cid == null) {
            dfs_visit(comment[i], 1, visit, ans);
        }
    }
}
dfs();