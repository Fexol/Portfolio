const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.determineWinner = functions.firestore
  .document("coinflips/{coinflipId}")
  .onUpdate(async (change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();

    // Check if the game has enough participants and hasn't determined a winner yet
    if (
      newValue.joinedUsers.length >= 2 &&
      !newValue.winner &&
      newValue.createdAt !== previousValue.createdAt
    ) {
      // Determine a random winner
      const participants = newValue.joinedUsers.map((user) => user.uid);
      const winnerIndex = Math.floor(Math.random() * participants.length);
      const winnerUid = participants[winnerIndex];

      // Update Firestore with the winner's UID
      await admin
        .firestore()
        .doc(`coinflips/${context.params.coinflipId}`)
        .update({
          winner: winnerUid,
        });
    }
  });
