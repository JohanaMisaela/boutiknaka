-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 01 juil. 2023 à 16:28
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `boutiknaka`
--

-- --------------------------------------------------------

--
-- Structure de la table `Auth`
--

CREATE TABLE `Auth` (
  `id` int(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `alias` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `pays` varchar(50) NOT NULL,
  `tva` varchar(50) NOT NULL,
  `societe` varchar(50) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Auth`
--

INSERT INTO `Auth` (`id`, `email`, `password`, `Name`, `alias`, `adresse`, `ville`, `pays`, `tva`, `societe`, `isAdmin`) VALUES
(1, 'test@gmail.com', 'test@gmail.com', 'Johanna', '', '', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `type` varchar(60) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `type`, `nom`, `prenom`, `adresse`, `date`) VALUES
(1, 'admin@gmail.com', '$2b$10$OyOtpWP4Yyv0b3I6RlliGecNlJDtEbnumzQPzDiFtQZuO/R.iBgE2', 'admin', '0', '0', '', ''),
(2, 'client1@gmail.com', '$2b$10$109wZTT2iJYcrUiKGeIhgejJlHt5PLu1XRQZMyrXOynB4tdwZpzBq', 'client', '0', '0', '', ''),
(6, 'test@gmail.com', '$2b$10$fn4kToir1S2y0Fdvf8PzU.s36ilSfUB5yJhddGatRsucM.yf3NYNC', 'admin', '', '', '', '2023-06-22 09:07:35');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Auth`
--
ALTER TABLE `Auth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Auth`
--
ALTER TABLE `Auth`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
