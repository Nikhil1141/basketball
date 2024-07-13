import React, { memo } from 'react';
import '../style/BasketballPlayerCard.css';
import players from '../data/playersdata';

const BasketballPlayerCard = () => {
    return (
        <div>
            <h1>Basketball Player Cards</h1>
            <div className="player-card">
                {
                    players.map((player) => {
                        return (
                            <div key={player.id}>
                                <div className="card">
                                    <img src={player.image} className="imgg" alt={player.name} />
                                    <div className="card-bodyy">
                                        <h5>{player.name}</h5>
                                        <p>Position: {player.position}</p>
                                        <div className="player-stats">
                                            <p>Points per Game: {player.stats.pointsPerGame}</p>
                                            <p>Assists per Game: {player.stats.assistsPerGame}</p>
                                            <p>Rebounds per Game: {player.stats.reboundsPerGame}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default memo(BasketballPlayerCard);
