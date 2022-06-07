const tvShows = require("./table");

exports.addtvShows= async (tvObj) => {
  try {
    const newtvShows = await tvShows.create(tvObj);
    console.log(
      `Successfully added ${newtvShows.dataValues.title} to the database`
    );
  } catch (error) {
    console.log(error);
  }
};

exports.listtvShows = async () => {
  try {
    //find all movies
    const tvshow = await tvShows.findAll();
    for (let i = 0; i < tvshow.length; i++) {
      console.log(tvshow[i].dataValues.title, tvshow[i].dataValues.actor);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updatetvShows = async (updateObj, filterObj) => {
  try {
    //find a movie and update a column
    const response = await tvShows.update(updateObj, { where: filterObj });
    if (response[0] > 0) {
      console.log("Successfully updated");
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deletetvShows = async (filterObj) => {
  try {
    //find a movie and delete it
    const response = await tvShows.destroy({ where: filterObj });
    if (response > 0) {
      console.log("Successfully deleted");
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};