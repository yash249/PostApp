import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import './AllCardsPage.css'

class AllCardsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picsData: [],
            imageClickedUrl: null
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
            .then(response => response.json())
            .then(data => this.setState({ picsData: data.pics }));
    }

    any = (id) => {
        let newData = this.state.picsData.map(item => {
            if (id === item.id && item.liked !== true) {
                let currentItem = item
                currentItem.likes = item.likes + 1
                currentItem.liked = true
                return currentItem
            }
            if (id === item.id && item.liked === true) {
                let currentItem = item
                currentItem.likes = item.likes - 1
                currentItem.liked = false
                return currentItem
            }
            else {
                return item;
            }
        })

        this.setState(prevState => {
            return {
                ...prevState,
                picsData: newData
            }
        })
    }

    onCommentChange = (event, id) => {
        this.setState({ newComment: event.target.value })
    }

    onPostClicked = (id, comment) => {
        let newData = this.state.picsData.map(item => {
            if (id === item.id) {
                let currentItem = item
                item.comments.push(comment)
                currentItem = item
                return currentItem
            }
            else {
                return item;
            }
        })
        if (this.state.picsData !== newData) {
            this.setState({ picsData: newData })
        }
    }

    filterByMostLiked = () => {
        let sortedByLikes = this.state.picsData.sort(function (a, b) {
            return a.likes - b.likes;
        }).reverse();

        this.setState({ picsData: sortedByLikes }, () => { console.log("sortedByLikes") })
    }

    filterByMostCommented = () => {
        let sortedByLikes = this.state.picsData.sort(function (a, b) {
            return a.comments.length - b.comments.length;
        }).reverse();

        this.setState({ picsData: sortedByLikes }, () => { console.log("sortedByLikes") })
    }

    onSearchTermEntered = (event) => {
        const results = this.state.picsData.filter(item =>
            item.category.toLowerCase().includes(event.target.value)
        );
        this.setState({ picsData: results })
    }

    onImageClick = (url) => {
        this.setState({imageClickedUrl:url})
    }

    render() {
        return (
            <>
            <div style={{ display: this.state.imageClickedUrl ? "block" : "none"}} id="overlay" onclick="off()">
                <img  className = "overlayImageStyle" src={this.state.imageClickedUrl} alt="Avatar" style={{ width: "500px" }}></img>
            </div>
            <div>
                <div className="Header">
                    <div className="filter" onClick={this.filterByMostLiked}>Most Liked</div>
                    <div className="filter">|</div>
                    <div className="filter" onClick={this.filterByMostCommented}>Most Commented</div>
                    <input type="search" onChange={this.onSearchTermEntered} placeholder="Search Images"></input>
                </div>
                <div className="Cards">
                    {this.state.picsData.map(item => <Card onImageClick = {this.onImageClick} onPostClicked={this.onPostClicked} onCommentChange={this.onCommentChange} any={this.any} {...item} />)}
                </div>
            </div>
            </>
        )
    }
}

export default AllCardsPage;