import styles from  './charactersInfo.module.css';
import { Link } from "react-router-dom";

import { ArrowIcon } from "icons";


const CharactersInfo = () => {
    return (
        <div className={styles.wrapper}> 
            <Link to='/'><ArrowIcon/></Link>
            <div className={styles.wrapper__title}>
                <img src='' alt='alt'/>
                <h1>Рик Санчез</h1>
                <p>Живой</p>
            </div>
            <div className={styles.wrapper__content}>
                <p>Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                и социопатия заставляют беспокоиться семью его дочери.</p>
                <div style={{display: 'flex', gap: 146}}>
                    <div>
                        <span>Пол</span>
                        <p>Мужской</p>
                    </div>
                    <div>
                        <span>Раса</span>
                        <p>Человек</p>
                    </div>
                </div>
                <div>
                    <span>Место рождения</span>
                    <p>Земля С-137</p>
                </div>
                <div>
                    <span>Местоположение</span>
                    <p>Земля (Измерение подменны)</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.episodes}>
                <div style={{}}>
                <p>Эпизоды</p>
                <span>Все эпизоны</span>
                </div>
            </div>
        </div>
     );
}

export default CharactersInfo;
