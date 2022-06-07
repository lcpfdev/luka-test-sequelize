const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addtvShows,
  listtvShows,
  updatetvShows,
  deletetvShows,
} = require("./tvShows/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      //take tvShows key value pairs from yargsObj, send them to an add function and return tvShows.
      await addtvShows({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
      //list all tvShowss from database
      await listtvShows();
    } else if (yargsObj.update) {
      //take filter and update k/v pairs from yargsObj, send them to update function and return success/failure message
      await updatetvShows({ actor: yargsObj.actor }, { title: yargsObj.title });
    } else if (yargsObj.delete) {
      //take filter k/v pair from yargsObj and send to delete function, return success/failure message
      await deletetvShows({ title: yargsObj.title });
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);