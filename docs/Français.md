# Documentation Française 🇫🇷

## Commencement

Pour commencer il faudra installer node.js sur votre pc. Pour ce faire vous pouvez vous rendre sur leur [site](https://nodejs.org/fr/) ou vous pouvez télécharger un gestionaire de versions comme [nvm](https://github.com/nvm-sh/nvm).

Il vous faudra ensuite vous rendre sur le [portail développeur](https://discord.com/developers/applications) de discord et vous créer une application. Je ne m'attarderais pas sur ce point il existe déjà une multitude de ressources à ce sujet.

Une fois que tout ceci est fait clonez ce projet ou bien téléchargez le zip.

Par la suite rendez-vous dans un terminal et tapez la commande `npm i` ce qui installera discord.js et vous avez presque fini.

Il ne vous reste plus qu'à éditer le fichier config.json avec vos information:

OWNER_ID = L'identifiant du propriétaire du bot (vous le trouvez en faisant un clic droit sur un utilisateur)
BOT_TOKEN = Le token de votre bot. Il se trouve dans le portail dévelopeurs.
DEFAULT_PREFIX = Le préfix par défaut de votre bot.
ERROR_LOGS_CHANNEL = L'identifiant du salon dans lequel vous voulez envoyer les erreurs liées au bot.

## Et après ?

Par la suite vous pouvez commencer à développer votre bot. Dans les dossiers `Commands` et `SlashCommands` vous devrez créer des sous dossiers correspondants à des catégories de commandes. Dans ces sous dossiers vous pourrez créer vos commandes (un exemple est fourni).

Pour ce qui est des évênements vous devrez commencer par les créer dans `handler/loadEvents` par la suite vous pourrez créer votre évênement. Pour ce qui est du fonctionnement appuyez vous sur ce qui est fait avec le fichier `commands.js`. Dernière chose à savoir les events sont aussi découpez en sous dossiers. Les dossiers par défaut sont définis dans le fichier `handler/loadEvents` vous pouvez en créer d'autre ou éditer ceux déjà présent en modifiant ce fichier.

## Support & Contribution

Si vous rencontrez un soucis n'hésitez pas à demander conseil sur Github ou sur mon [serveur support](discord.gg/6qzkefevrb).
Si vous voulez contribuer à ce projet ouvrez une pull request.

## Droits d'utilisation 

Ce projet est un projet ouvert à tous. Vous-êtes libre de le modifier et de le difuser comme bon vous semble.
