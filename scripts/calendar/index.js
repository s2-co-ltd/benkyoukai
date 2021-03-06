const fs = require("fs");
const { makeSessions, makeSessionsAll } = require("../build/make-sessions");
const ics = require("ics");
const moment = require("moment");

const combineDateAndTime = (d, t) => {
  let isAllDay = false;
  t = `${t}`.padStart(8, "0");
  d = d
    .split("-")
    .map((a) => `${a}`.padStart(2, "0"))
    .join("-");
  if (t === "00000000") {
    t = "12:00:00";
    isAllDay = true;
  }
  return [d + " " + t, isAllDay];
};

const convertSessionsToEvents = (sessions) => {
  const result = [];
  for (let i = 0; i < sessions.length; i++) {
    const n = buildEventObject(
      sessions[i].date,
      "18:00:00",
      sessions[i].date,
      "19:00:00",
      sessions[i].number + " " + "勉強会" + sessions[i].title,
      "勉強会" + sessions[i].number,
      "https://us02web.zoom.us/j/85816107329?pwd=elVWME5IbkVUM2JodFZOZUM0eXhqZz09",
      sessions[i].presenter,
      ""
    );
    result.push(n);
  }
  return result;
};

function buildEventObject(
  startDate,
  startTime,
  endDate,
  endTime,
  schedule,
  scheduleDetails,
  notes,
  participants,
  facility
) {
  let [sDTimestamp, isAllDay] = combineDateAndTime(startDate, startTime);
  let sD = new Date(
    moment(new Date(sDTimestamp)).valueOf()
  );
  let [eDTimestamp] = combineDateAndTime(endDate, endTime);
  let eD = new Date(
    moment(new Date(eDTimestamp)).valueOf()
  );

  const sFormatted = moment(sD).format("YYYY-MM-DD HH:mm");

  const [fh, sh] = sFormatted.split(" ");

  const [year, month, day] = fh.split("-");
  const [hour, minutes] = sh.split(":");

  let duration = eD - sD;
  const dSeconds = duration / 1000;
  const dMinutes = dSeconds / 60;
  const dHours = dMinutes / 60;
  const dHoursFloor = Math.floor(dHours);
  const mRatio = dHours - dHoursFloor;
  const finalMinutes = mRatio * 60;

  const event = {
    title: scheduleDetails,
    description: notes + "\n\n" + schedule + "\n\n" + "担当者\n" + participants,
    location: facility,
  };

  if (isAllDay) {
    event.end = [parseInt(year), parseInt(month), parseInt(day)];
    event.start = [parseInt(year), parseInt(month), parseInt(day)];
  } else {
    event.duration = {
      hours: parseInt(dHoursFloor),
      minutes: parseInt(finalMinutes),
    };
    event.start = [
      parseInt(year),
      parseInt(month),
      parseInt(day),
      parseInt(hour),
      parseInt(minutes),
    ];
  }

  return event;
}

const makeCalendar = async () => {
  console.log("Making calendar...");

  const sessions = makeSessionsAll();

  const events = convertSessionsToEvents(sessions);

  const { error, value } = ics.createEvents(events);

  if (error) {
    console.log(error);
    return;
  }

  fs.writeFileSync("downloads/calendar.ics", value);
  console.log("Calendar updated.");
};

makeCalendar();
