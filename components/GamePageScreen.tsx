import { useEffect, useState } from "react";
import { Animated, Easing, View } from "react-native";
import { CircularQueue } from "../classes/circular-queue";

interface GamePageProps {
  route: any; // You can replace 'any' with specific type if available
  navigation: any;
}

const GamePageScreen: React.FC<GamePageProps> = ({ route, navigation }) => {
  const q = new CircularQueue(route.params.value.length);
  route.params.value.forEach((nome: string) => q.enqueue(nome));

  const [queue, setQueue] = useState(q);
  const [update, setUpdate] = useState(Math.floor(Math.random() * 4) + 2);
  const [message, setMessage] = useState("");
  let rounds = update;
  let fim = false;
  useEffect(() => {
    const interval = setInterval(() => {
      if (fim) {
        navigation.navigate("NumberInput", {});
      }
      setUpdate((r) => {
        return r + 1;
      });
      setQueue((q) => {
        let clone = q;
        rounds -= 1;

        let removed = clone.dequeue();

        if (queue.isEmpty()) {
          alert(removed + " venceu");
          fim = true;
          return q;
        }

        if (rounds) {
          clone.enqueue(removed);
        } else {
          rounds = Math.floor(Math.random() * 10) + 1;
          setMessage(removed + " foi eliminado");
        }
        setUpdate(rounds);
        return clone;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const roda = () => {
    const lados = queue.getSize();

    const angulo = 360 / lados;

    return (
      <div key={update}>
        {queue.peekAll().map((element: any, i: any) => {
          const rotation = i * angulo;

          return (
            <div
              style={
                {
                  transform: `rotate(${rotation}deg)`,
                  ...styles.polygon,
                } as any
              }
              key={i}
            >
              {element}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <View>
      <div>{message}</div>
      <div style={{ paddingTop: "50px" }}>
        Número de rodadas restantes: {rounds}
      </div>
      <div style={styles.polygonContainer} id="circulo">
        {roda()}
      </div>
    </View>
  );
};

const styles = {
  polygonContainer: {
    width: "300px",
    height: "300px",
    position: "relative" as "relative",
  },
  polygon: {
    paddingTop: "50px",
    position: "absolute",
    width: "100%",
    paddingBottom: "200px",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "black",
  },
};

export default GamePageScreen;
