class Event {
  constructor(
    eventId,
    date,
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
