import React from 'react'
import MainStyles from  "./MainContent.module.css"

const MainContent = () => {
  return (
    <section>
        <div id={MainStyles.main__emphasis}>
            <div id={MainStyles.left__emphasis}>
                <h1>01</h1>
                <p>Problems excite me while solutions define me. The impossible is Just another problem begging to be solved. </p>
            </div>
            <div id={MainStyles.right__emphasis}>
                <p>
                I solve problems with math and logic. Every problem is an equation. Every system, a proof waiting to be written. <br/>
                I also desire to architect scalable systems from the ground up. Distributed, resilient, efficient. Complexity doesn't scare me—it excites me.
                </p>
            </div>
        </div>

        <div id={MainStyles.grid__points}>
            <div className={MainStyles.points}>
                <h1>01.</h1>
                <h3>Reinforcement Leaning research</h3>
                <p>
                    I research reinforcement learning algorithms to give objects agency—chairs that adjust, doors that predict. Creating a world where everything thinks alongside us.
                </p>
            </div>
            <div className={MainStyles.points}>
                <h1>02.</h1>
                <h3>System design Architect</h3>
                <p>
                   I architect unified design patterns bridging hardware and software—scalable, fault-tolerant, elegant. From circuit boards to distributed systems, I want to build solutions that scale infinitely and never break.
                </p>
            </div>
            <div className={MainStyles.points}>
                <h1>03.</h1>
                <h3>Mechatronics</h3>
                <p>
                    I merge mechanical, electronic, and software systems—bringing machines to life. Mechatronics isn't just engineering; it's orchestrating movement, intelligence, and purpose into seamless, responsive creations.
                </p>
            </div>
            <div className={MainStyles.points}>
                <h1>04.</h1>
                <h3>Mathematics</h3>
                <p>
                   Math is my language. It is the elegant logic behind every algorithm, every system, every thinking machine. It transforms abstract dreams into concrete, scalable reality. The Purest foundation known.
                </p>
            </div>

        </div>
    </section>
  )
}

export default MainContent