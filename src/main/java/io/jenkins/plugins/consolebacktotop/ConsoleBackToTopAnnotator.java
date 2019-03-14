package io.jenkins.plugins.consolebacktotop;

import hudson.MarkupText;
import hudson.console.ConsoleAnnotator;

import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;

/**
 * @author Stefan Welsch<stefan.welsch@b-nova.com>
 */
public class ConsoleBackToTopAnnotator extends ConsoleAnnotator {

	@CheckForNull
	@Override
	public ConsoleAnnotator annotate(@Nonnull Object context, @Nonnull MarkupText markupText) {
		return this;
	}
}
