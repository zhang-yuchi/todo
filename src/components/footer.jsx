export default {
    data(){
        return {
            author:"zyc"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
                <el-input></el-input>
            </div>
        )
    }
}