# Notifications

* [HASS Docs: Alert](https://www.home-assistant.io/integrations/notify/)

* [YouTube: Super-charge your notifications in Home Assistant](https://www.youtube.com/watch?v=mK1wdpxhLbM)
* [GitHub: Notifications engine (BeardedTinker)](https://github.com/BeardedTinker/Home-Assistant_Config/blob/master/scripts/notify_engine.yaml)
* [GitHub: Notification engine (CCOSTAN)](https://github.com/CCOSTAN/Home-AssistantConfig/blob/master/config/script/notify_engine.yaml)

* [YouTube: Home Assistant Mobile Notification Deepdive](https://www.youtube.com/watch?v=Bc33pm4-nnM)
* [YouTube: Local Push Notifications in Home Assistant](https://www.youtube.com/watch?v=hBkxXnSkn1w)

* [HASS Community: Notify person](https://community.home-assistant.io/t/notify-person/159876/24)
    * Use customize.yaml to add notify_service(s) to person objects
    * Use person objects to get notify_service(s)
    * Use zone.home to select persons at home to notify them
* [HASS Community: Notify everyone at home](https://community.home-assistant.io/t/notify-everyone-at-home/237463/7)
* https://community.home-assistant.io/t/notify-alert-only-people-present-in-the-house-howto/277736/8
* https://community.home-assistant.io/t/notify-alert-only-people-present-in-the-house-howto/277736/13

# Alerts

* [HASS Docs: Alert](https://www.home-assistant.io/integrations/alert/)

* [HASS Community: Simple and Effective Alerting](https://community.home-assistant.io/t/simple-and-effective-alerting/394027)
* [GitHub: Alert2 - Alerts based on conditions and events](https://github.com/redstone99/hass-alert2)

# What to notify

## Home Assistant Restart Required

* [HASS Community: Restart required notification](https://community.home-assistant.io/t/restart-required-notification/588287/6)
```yaml
template:
    - binary_sensor:
        - name: "Home Assistant Restart Required"
            state: >
                {{ 
                    states.update | 
                    selectattr('attributes.release_summary','eq','<ha-alert alert-type="error">Restart of Home Assistant required</ha-alert>') | 
                    list | 
                    count 
                }}
            device_class: update
```

## Unresponsive devices

* [YouTube: Report on Unvalailable Devices](https://www.youtube.com/watch?v=o7lKbxyYkFU)
* [HASS Community: Better Blueprint to report when any battery device SmartSwtichswitch has gone offline](https://community.home-assistant.io/t/better-blueprint-to-report-when-any-battery-device-zigbee-zwave-etc-or-zigbee-zwave-smartswtich-has-gone-offline/693531)
* [HASS Community: Detecting unresponsive devices](https://community.home-assistant.io/t/detecting-unresponsive-devices/658030)
* [GitHub: Unavailable Entities Sensor](https://github.com/jazzyisj/unavailable-entities-sensor/tree/main)
* [HomeAutomationGuy: Managing Offline Devices in Zigbee2MQTT](https://www.homeautomationguy.io/blog/managing-offline-devices-in-zigbee2mqtt)