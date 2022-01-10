export type InterpolateSettings = {
  start: {
    x: number,
    y: number
  }
  end: {
    x: number,
    y: number
  }
}

function interpolate(s: InterpolateSettings, progress: number): number {
  const slope = (s.end.y - s.start.y) / (s.end.x - s.start.x)
  const intercept = s.start.y - slope * s.start.x
  const proposal = slope * progress + intercept
  const min = Math.min(s.start.y, s.end.y)
  const max = Math.max(s.start.y, s.end.y)
  return Math.max(min, Math.min(max, proposal))
}

export default interpolate