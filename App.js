import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Alert, Platform, StatusBar } from 'react-native';
import Card from './components/Card';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const images = {
  lamborguini: require('./assets/lamborguini.webp'),
  opala: require('./assets/impala.jpg'),
  bronco: require('./assets/bronco.jpg'),
  fiat500: require('./assets/fiat500.webp'),
};

const pairs = ['lamborguini', 'opala', 'bronco', 'fiat500'];

const App = () => {
  const [cards, setCards] = useState([]);
  const [lastRevealedCard, setLastRevealedCard] = useState(null);

  useEffect(() => {
    const newCards = pairs
      .concat(pairs)
      .sort(() => Math.random() - 0.5)
      .map((name, index) => ({
        index,
        name,
        image: images[name],
        isFaceUp: false,
        isMatched: false,
      }));
    setCards(newCards);
  }, []);

const handleCardPress = (index) => {
  const newCards = [...cards];
  const card = newCards[index];

  if (card.isMatched || card.isFaceUp) return;

  card.isFaceUp = true;
  newCards[index] = card;

  if (lastRevealedCard && card.name === lastRevealedCard.name) {
    card.isMatched = true;
    lastRevealedCard.isMatched = true;
    setLastRevealedCard(null);
  } else if (lastRevealedCard && card.name !== lastRevealedCard.name) {
    setCards(newCards);
    setTimeout(() => {
      card.isFaceUp = false;
      lastRevealedCard.isFaceUp = false;
      setCards([...newCards]);
    }, 2000);
    setLastRevealedCard(null);
  } else {
    setLastRevealedCard(card);
  }

  if (newCards.every((card) => card.isMatched)) {
    Alert.alert('Parabéns!', 'Você ganhou o jogo! Deseja jogar novamente?', [
      { text: 'Reiniciar jogo', onPress: () => resetGame() },
    ]);
  }
};


  const resetGame = () => {
    const newCards = pairs
      .concat(pairs)
      .sort(() => Math.random() - 0.5)
      .map((name, index) => ({
        index,
        name,
        image: images[name],
        isFaceUp: false,
        isMatched: false,
      }));
    setCards(newCards);
    setLastRevealedCard(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.isFaceUp || card.isMatched ? card.image : require('./assets/card-back.jpg')}
          onPress={() => handleCardPress(index)}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
