import React from 'react'
import { Header } from '../components/Header/header'
import "./page.css"

export default function MyDietPlanPage() {
  return (
    <div>
        <Header/>
        <div className="container dietdiv" >
            <div className="morning">
                <h4>Breakfast</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt.</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum soluta quos!</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="snack1">
                <h4>Snack</h4>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="lunch">
                <h4>Lunch</h4>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="snack2">
                <h4>Snack</h4>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="dinner">
                <h4>Dinner</h4>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
