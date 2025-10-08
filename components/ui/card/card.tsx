import React from "react";
import { Botao } from "../botao";
import './card.css';

interface CardProps {
    title: string;
    time: string;
    duration: string;
    trainer: string;
    gym: string;
}

const Card = ({ title, time, duration, trainer, gym }: CardProps) => {
    return (
        <div className="card">
            <div className="label">
                <p className="labelTitle">{title}</p>
                <div className="labelDateTime">
                    <p className="labelTime">{time}</p>
                    <p className="labelDuration">{duration}</p>
                </div>
            </div>
            <div>
                <div className="cardLine">
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Star_Outline.svg" />
                    <p className="cardLineText">{trainer}</p>
                </div>

                <div className="cardLine">
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Pin-in-the-map.svg"/>
                    <p className="cardLineText">{gym}</p>
                </div>

            </div>
            <Botao title="Reservar Vaga" />
        </div>
    )
}

export default Card;