class Event {
  constructor(
    eventId,
    date,
    location,
    chartedBy,
    batter,
    batterBDay,
    batterHand,
    pitcher,
    pitcherBDay,
    pitcherHand
  ) {
    this.eventId = eventId
    this.date = date
    this.location = location
    this.chartedBy = chartedBy
    this.batter = batter
    this.batterBDay = batterBDay
    this.batterHand = batterHand
    this.pitcher = pitcher
    this.pitcherBDay = pitcherBDay
    this.pitcherHand = pitcherHand
  }
}

export default Event
