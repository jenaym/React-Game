import React, {Component} from "react";
import Item from "../Item";
import imageData from "../../imageData.json";
import NavBar from "../NavBar";
import Header from "../Header";
import ContentContainer from "../ContentContainer";


class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        imageData
    };

    //When this component mounts, shuffle the games images
    componentDidMount() {
        this.setState({ imageData: this.mixImage(this.state.imageData) });
    }

    // Function to mix around images on game reset
    mixImage = imageData => {
        let i = imageData.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempSpot = imageData[i];
            imageData[i] = imageData[j];
            imageData[j] = tempSpot;
            i--;
        }
        return imageData;
    }

    // Function to handle correct answer
    handleCorrectAnswer = updatedScores => {
        const score = this.state.score;
        const topScore = this.state.topScore;
        const updatedScore = score + 1;
        const newTopScore = Math.max(updatedScore, topScore);

        this.setState({
            score: updatedScore,
            topScore: newTopScore,
            imageData: this.mixImage(updatedScores)
        })
    }

    //Function to handle incorrect answer
    handleIncorrectAnswer = imageData => {
        const resetGame = imageData.map(clickItem => ({
            // id:clickItem.id,
            // image:clickItem.image,
            clicked: false 
        }));
        this.setState({
            score: 0,
            imageData: this.mixImage(resetGame)
        });
    }

    handleImageClick = id => {

    }


    render() {
        return (
            <div>
                <NavBar score={this.state.score} topScore={this.state.topScore}
                />
                <Header />
                <ContentContainer>
                    {this.state.imageData.map(clickItem => (
                        <Item
                            key={clickItem.id}
                            id={clickItem.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleImageClick}
                            pic={clickItem.pic}
                        />
                    ))}

                </ContentContainer>
            </div>
        )
    }
}