# Greenhouse Irrigation

## Sonoff SVW

```yaml
automation:
  - triggers:
      - trigger: time
        at: "01:00:00"
    conditions:
      - condition: time
        weekday:
          - mon
          - wed
          - fri
    actions:
      - action: mqtt.publish
        metadata: {}
        data:
          evaluate_payload: false
          qos: 0
          retain: false
          topic: zigbee2mqtt/Outside Sonoff Valve 1 (Z)/set
          payload: >-
            {
              "cyclic_quantitative_irrigation": {
                "current_count": 0, 
                "total_number": {{ states('input_number.outside_irrigation_cycle_count') | float(1) }},
                "irrigation_capacity": {{ states('input_number.outside_irrigation_delivery_target') | float(50) }},
                "irrigation_interval": {{ states('input_number.outside_irrigation_interval') | float(120) }}
              }
            }
```