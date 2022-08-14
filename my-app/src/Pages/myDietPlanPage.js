import React from 'react'
import { Header } from '../components/Header/header'
import "./page.css"

export default function MyDietPlanPage() {
    return (
        <div>
            <div className='bckimg'>
                <Header />   
                <div className="container dietdiv" >
                    <h1 className='dieth1'>My Diet Plan</h1>
                    <div className="morning mt-4">
                        <h4><span className="material-symbols-outlined">
                            egg
                        </span>
                            Breakfast
                        </h4>
                        <ul className='dietdivul'>
                            <li>2.5 thin slices of feta cheese(30 grmas)</li>
                            <li>5 olives</li>
                            <li>2 thin slices of whole wheat bread</li>
                            <li>1 bowls of salad(1 tsp vinegar, half a lemon, 1 tsp olive oil)</li>
                        </ul>
                    </div>
                    <div className="snack mt-4">
                        <h4><span class="material-symbols-outlined">tapas</span>Snack</h4>
                        <ul className='dietdivul'>
                            <li>1 pieces of fruit</li>
                            <li>6-8 almonds or nuts</li>
                            <li>2 tbsp Turkish yogurth</li>
                            <li>1 bowls of salad(1 tsp vinegar, half a lemon, 1 tsp olive oil)</li>
                        </ul>
                    </div>
                    <div className="dinner mt-4">
                        <h4> <span class="material-symbols-outlined">soup_kitchen</span>Dinner</h4>
                        <ul className='dietdivul'>
                            <li>120 grams of meat</li>
                            <li>4 tbsp Turkish yogurth</li>
                            <li>1 bowls of salad(1 tsp vinegar, half a lemon, 1 tsp olive oil)</li>
                            <li>2 thin slices of whole wheat bread</li>
                        </ul>
                    </div>
                    <p style={{fontWeight:"bold", color:"red"}}>Note: Do not diet without consulting your dietitian.</p>
                </div>
            </div>
        </div>
    )
}
