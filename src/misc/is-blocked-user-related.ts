export function isBlockedUserRelated(note: any, blockedUserIds: Set<string>): boolean {
	if (blockedUserIds.has(note.userId)) {
		return true;
	}

	if (note.reply != null && blockedUserIds.has(note.reply.userId)) {
		return true;
	}

	if (note.renote != null && blockedUserIds.has(note.renote.userId)) {
		return true;
	}

	return false;
}
