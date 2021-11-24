import './heroes.css'


function Heroes(props) {
    const { name, universe, alterego, activity, friends, superpowers, image } = props;
    return (

        <div className="wrapper" >
            <div className="card" >
                <div>Псевдоним:{name}</div>
                <div>Вселенная:{universe}</div>
                <div>Альтерэго:{alterego}</div>
                <div>Суперспособности:{superpowers}</div>
                <div>Соратники:{friends}</div>
                <div>{activity}</div>

                <img src={image} alt={name} />
            </div>

        </div>
    );
}

export default Heroes;