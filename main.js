function addID(campaignRecord) {
    campaignRecord.id = `${campaignRecord.campaignName}-${campaignRecord.senderName}`;
    return campaignRecord;
}

export { addID };
